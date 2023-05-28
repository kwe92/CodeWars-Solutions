
# Solution to Compress The String Hacker Rank
from itertools import groupby


def f1(x): return x


def modString(s):
    sMod = ''
    for key, group in groupby(s, f1):
        sMod += f'({len(list(group))}, {key}) '
    print(sMod.strip())


if __name__ == '__main__':
    s = '1222331'
    modString(s)
