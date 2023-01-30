# familyspecialityeyeclinick
## wow
# last ---
num = int(input())

for _ in range(num):
    n = int(input())
    ar = list(map(int,input().split()))
    arr = list(set(ar))
    inc = False
    if len(arr) == 1:
        print("YES")
        continue
    if arr[0] < arr[1]:
        inc = True
    a = False
    if inc:
        i = 0
        while i < (len(arr) - 1):
            if arr[i] > arr[i + 1]:
                print("NO")
                a= True
                break
            i += 1
    else:
        inc = dec = True
        i = 0
        while i < (len(arr) - 1):
            if dec == True and arr[i] < arr[i + 1]:
                dec = False
            if dec == False and arr[i] < arr[i + 1]:
                print("NO")
                a= True
            i += 1
    if a == False:
        print("YES")
        
    