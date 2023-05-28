
# Solution to Compress The String Hacker Rank
from itertools import groupby


# s = input()
# s = str(s)
s = '1222331'


def modString(s):
    sMod = ''
    for key, group in groupby(s, lambda x: x):
        sMod += f'({len(list(group))}, {key}) '
    print(sMod.strip())


modString(s)
