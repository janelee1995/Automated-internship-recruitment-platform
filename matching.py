# --------------------------------------------------------
#           PYTHON PROGRAM
# Here is where we are going to define our set of...
# - Imports
# - Global Variables
# - Functions
# ...to achieve the functionality required.
# When executing > python 'this_file'.py in a terminal,
# the Python interpreter will load our program,
# but it will execute nothing yet.
# --------------------------------------------------------

import pymongo
import json
import itertools
import test

# ------------------------------------------
#
# I. CLASS Suitor
#
# ------------------------------------------
class Suitor(object):

   # ------------------------------------------
   # 1. Constructor
   # ------------------------------------------
   def __init__(self, id, prefList):
      self.prefList = prefList
      self.rejections = 0 # num rejections is also the index of the next option
      self.id = id

   # ------------------------------------------
   # 2. FUNCTION preference
   # ------------------------------------------
   def preference(self):
      ### ---------------------------------------------------------------------------------------------------------------------
      #  This method was modified to return -1 when there are no more preferences available
      ### ---------------------------------------------------------------------------------------------------------------------
      if self.rejections == len(self.prefList):
         return -1
      else:
         return self.prefList[self.rejections]

   # ------------------------------------------
   # 3. Representation
   # ------------------------------------------
   def __repr__(self):
      return repr(self.id)

# ------------------------------------------
#
# II. CLASS Suited
#
# ------------------------------------------
class Suited(object):

   # ------------------------------------------
   # 1. Constructor
   # ------------------------------------------
   def __init__(self, id, prefList):
      self.prefList = prefList
      self.held = None
      self.currentSuitors = set()
      self.id = id

   # ------------------------------------------
   # 2. FUNCTION reject
   # ------------------------------------------
   def reject(self):
      if len(self.currentSuitors) == 0:
         return set()

      if self.held is not None:
         self.currentSuitors.add(self.held)

      self.held = min(self.currentSuitors, key=lambda suitor: self.prefList.index(suitor.id))
      rejected = self.currentSuitors - set([self.held])
      self.currentSuitors = set()

      return rejected

   # ------------------------------------------
   # 3. Representation
   # ------------------------------------------
   def __repr__(self):
      return repr(self.id)

# ------------------------------------------
#
# III. PREPARE THE MATCHING
#
# ------------------------------------------

# --------------------------------------------------------
# 1. FUNCTION load_json_file
# --------------------------------------------------------
def load_json_file(file_path):
    my_file = open(file_path, 'r')
    content = json.load(my_file)
    my_file.close()
    return content

# --------------------------------------------------------
# 2. FUNCTION store_json_file
# --------------------------------------------------------
def store_json_file(file_path, d):
    my_file = open(file_path, 'w')
    json.dump(d, my_file)
    my_file.close()

# --------------------------------------------------------
# 3. FUNCTION connect_to_mongoDB
# --------------------------------------------------------
def connect_to_mongoDB():
    # 1. We get the connection to MongoDB the database
    client = pymongo.MongoClient()


    # 2. Import database named Internship
    db = client.internship
    collection = db.preferences


    # 3. Return the collection manager
    return collection

# ------------------------------------------
# 3. FUNCTION get_ids
# ------------------------------------------
def get_ids(collection):
    # 1. We create the variables to output
    candidates = []
    positions = []

    # 2. We traverse the collection, filling up the lists
    for document in collection.find():
        if document["role"] == "candidate":
            candidates.insert(0, document["index_number"])
        else:
            positions.insert(0, document["index_number"])

    # 3. We return the variables
    return (candidates, positions)

# ------------------------------------------
# 5. FUNCTION find_document_in_list
# ------------------------------------------
def find_document_in_list(doc_id, doc_list):
    # 1. We create the variable to output
    res = {}

    # 2. We get the size of the list
    size = len(doc_list)

    # 3. We look for the element
    index = 0
    found = False
    while (found == False) and (index < size):
        if doc_list[index]["index_number"] == doc_id:
            found = True
        else:
            index = index + 1

    if (found == True):
        res = doc_list[index]

    # We output the result
    return res

# ------------------------------------------
# 5. FUNCTION get_candidate_preferences
# ------------------------------------------
def get_candidate_preferences(collection, candidate_ids, position_ids):
    # 1. We create the variable to output
    candidate_preferences = []

    # 2. We filter the candidate documents
    candidate_documents = []
    for document in collection.find():
        if document["role"] == "candidate":
            candidate_documents.append(document)

    # 3. For each candidate
    for candidate_name in candidate_ids:
        # 3.1. We found the document of the collection of this candidate
        doc = find_document_in_list(candidate_name, candidate_documents)

        # 3.2. We get the positions the candidate applied to
        pos = []
        for subdoc in doc["preference"]:
            # 3.2.1. We get the id
            pos.append((subdoc["index_position"], subdoc["index_number"]))

        # 3.3. We sort the positions by ranking
        pos.sort()

        # 3.4. We filter the results to get just the position name
        for i in range(len(pos)):
            new_pos = position_ids.index(pos[i][1])
            pos[i] = new_pos

        # 3.5. We add the sublist to the total list
        candidate_preferences.append(pos)

    # 4. We return the variable
    return candidate_preferences

# ------------------------------------------
# 6. FUNCTION get_position_preferences
# ------------------------------------------
def get_position_preferences(collection, candidate_ids, position_ids):
    # 1. We create the variable to output
    position_preferences = []

    # 2. We filter the position documents
    position_documents = []
    for document in collection.find():
        if document["role"] == "employer":
            position_documents.append(document)

    # 3. For each position
    for position_name in position_ids:
        # 3.1. We found the document of the collection for this position
        doc = find_document_in_list(position_name, position_documents)

        # 3.2. We get the candidates that applied for that position
        can = []
        for subdoc in doc["preference"]:
            # 3.2.1. We get the id
            can.append((subdoc["weightedScore"], subdoc["index_number"]))

        # 3.3. We sort the candidates by their weight (in decreasing weight order)
        can.sort(reverse=True)

        # 3.4. We filter the results to get just the candidate name
        for i in range(len(can)):
            new_can = candidate_ids.index(can[i][1])
            can[i] = new_can

        # 3.5. We add the sublist to the total list
        position_preferences.append(can)

    # 4. We return the variable
    return position_preferences

# ------------------------------------------
# 7. FUNCTION create_objects
# ------------------------------------------
def create_objects(preference_list, mode):
    # 1. We create the variable to be return
    object_list = []

    # 2. We collect the length of the list
    size = len(preference_list)

    # 3. Main loop for creation of objects
    for i in range(size):
        # 3.1. Mode true --> Suitors
        if mode == True:
            object_list.append(Suitor(i, preference_list[i]))
        else:
            object_list.append(Suited(i, preference_list[i]))

    # 4. We return the object
    return object_list

# ------------------------------------------
# 8. FUNCTION get_actual_solution
# ------------------------------------------
def get_actual_solution(solution, candidate_ids, position_ids):
    # 1. We create the variable to be output
    actual_solution = []

    # 2. We traverse all the keys of the solution
    for position in solution:
        # 2.1. We get the actual name of the position in the database
        actual_position = position_ids[position.id]

        # 2.2. We get the value associated to the key
        actual_candidate = solution[position]

        # 2.2.1. If the value is none, we assign it to -1. Otherwise we assign it to the actual name of the candidate in the database
        if actual_candidate == None:
            actual_candidate = -1
        else:
            actual_candidate = candidate_ids[actual_candidate.id]

        # 2.3. We fill the actual values to the list
        actual_solution.append((actual_position, actual_candidate))

    # 3. We return the output variable
    return actual_solution

# ------------------------------------------
#
# IV. MATCHING
#
# ------------------------------------------

# ------------------------------------------
# 1. FUNCTION monogamousStableMarriage
# ------------------------------------------
# monogamousStableMarriage: [Suitor], [Suited] -> {Suitor -> Suited}
# construct a stable (monogamous) marriage between suitors and suiteds
def monogamousStableMarriage(suitors, suiteds):
   unassigned = set(suitors)

   while len(unassigned) > 0:
      for suitor in unassigned:
         ### ---------------------------------------------------------------------------------------------------------------------
         # Jane, I have modified this line so as to only add the suitor if he is making an actual proposal
         ### ---------------------------------------------------------------------------------------------------------------------
         if suitor.preference() != -1:
            suiteds[suitor.preference()].currentSuitors.add(suitor)
      unassigned = set()

      for suited in suiteds:
         unassigned |= suited.reject()

      for suitor in unassigned:
         suitor.rejections += 1

   return dict([(suited, suited.held) for suited in suiteds])

# ------------------------------------------
# 2. FUNCTION verifyStable
# ------------------------------------------
# verifyStable: [Suitor], [Suited], {Suitor -> Suited} -> bool
# check that the assignment of suitors to suited is a stable marriage
def verifyStable(suitors, suiteds, marriage):
   suitedToSuitor = dict((v,k) for (k,v) in marriage.items())

   precedes = lambda L, item1, item2: L.index(item1) < L.index(item2)

   def suitorPrefers(suitor, suited):
      return precedes(suitor.prefList, suited.id, marriage[suitor].id)

   def suitedPrefers(suited, suitor):
      return precedes(suited.prefList, suitor.id, suitedToSuitor[suited].id)

   for (suitor, suited) in itertools.product(suitors, suiteds):
      if suited != marriage[suitor] and suitorPrefers(suitor, suited) and suitedPrefers(suited, suitor):
         return False, (suitor.id, suited.id)

   return True

# ------------------------------------------
# 3. FUNCTION my_matching
# ------------------------------------------
def my_matching(suitor_preferences, suited_preferences):
    # 1. We create the variable to return
    marriage = {}

    # 2. We create the suitors from the list of preferences
    suitor_objects = create_objects(suitor_preferences, True)

    # 3. We create the suiters from the list of preferences
    suited_objects = create_objects(suited_preferences, False)

    # 4. We run the matching algorithm
    marriage = monogamousStableMarriage(suitor_objects, suited_objects)

    # 5. We return the solution
    return marriage

# ------------------------------------------
#
# V. MAIN
#
# ------------------------------------------
def my_main():
    # 1. Establish the connection to MongoDB
    collection = connect_to_mongoDB()

    # 2. Get the JavaScript - Python candidate and position ids
    (candidate_ids, position_ids) = get_ids(collection)

    # 3. We get the suitor and suited preferences
    suitor_preferences = get_candidate_preferences(collection, candidate_ids, position_ids)
    suited_preferences = get_position_preferences(collection, candidate_ids, position_ids)

    #suitor_preferences = [[3, 5, 4, 2, 1, 0], [2, 3, 1, 0, 4, 5], [5, 2, 1, 0, 3, 4], [0, 1, 2, 3, 4, 5], [4, 5, 1, 2, 0, 3], [0]]
    #suited_preferences = [[3, 5, 4, 2, 1, 0], [2, 3, 1, 0, 4, 5], [5, 2, 1, 0, 3, 4], [0, 1, 2, 3, 4, 5], [4, 5, 1, 2, 0, 3], [0, 1, 2, 3, 4, 5]]

    # 4. We solve the associated stable marriage problem
    solution = my_matching(suitor_preferences, suited_preferences)

    # 5. We print the solution to the screen
    print(solution)

    # 6. We map the solution to the actual candidate and position ids
    actual_solution = get_actual_solution(solution, candidate_ids, position_ids)
    print(actual_solution)

    # 7. We print the solution to a file, just in case this helps
    my_output_file = open("python_result.txt", "w")
    for i in actual_solution:
        output_line = str(i[0]) + "," + str(i[1]) + "\n"
        my_output_file.write(output_line)
    my_output_file.close()

# ---------------------------------------------------------------
#           PYTHON EXECUTION
# This is the main entry point to the execution of our program.
# It provides a call to the 'main function' defined in our
# Python program, making the Python interpreter to trigger
# its execution.
# ---------------------------------------------------------------
if __name__ == "__main__":
    my_main()
