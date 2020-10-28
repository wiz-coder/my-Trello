def input_names():
    names = []
    while True:
        temp = input()
        if ord(temp[0]) == 113 or ord(temp[0])==81: return names
        else:
            names.append(temp)
    return names
def input_heights():
    heights = []
    desired_heights = {48,49,50,51,52,53,54,55,56,57}
    while True:
        temp = input()
        size = len(temp)
        for i in range(size):
            if ord(temp[i]) not in desired_heights: return heights
        temp_height = float(temp)
        heights.append(temp_height)
    return heights

def mapping(heights,names):
    size = len(heights)
    participants = []
    for i in range(size):
        participants.append([heights[i],names[i]])
    return participants

def merge(left,right):
    i = 0
    j = 0
    left_size = len(left)
    right_size = len(right)
    res = []
    while i < left_size and j < right_size:
        if left[i] < right[j]:
            res.append(left[i])
            i += 1
        else:
            res.append(right[j])
            j += 1
    while i < left_size:
        res.append(left[i])
        i += 1
    while j < right_size:
        res.append(right[j])
        j += 1
    return res

def merge_sort(arr):
    if len(arr) <= 1: return arr
    else:
        mid = int(len(arr)/2)
        left = merge_sort(arr[:mid])
        right = merge_sort(arr[mid:])
        return merge(left,right)

required_participants = int(input())
names = input_names()
heights = input_heights()
participants = mapping(heights,names)
participants_size = len(participants)
sorted_heights = merge_sort(heights)
net_participants = []
while i <= required_participants:
    flag = False
    k = 0
    for j in range(participants_size):
        if participants[j][0] == sorted_heights[i]: 
            net_participants.append(participants[j][1]) 
            flag = True
            if flag == True:
                k += 1
                flag = False
    i += k
for k in net_participants:
    print(k)


