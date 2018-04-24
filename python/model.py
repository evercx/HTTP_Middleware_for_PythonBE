import time
import random
import sys

class Timer:

    def __init__(self):
        self.__start = 0.0
        self.__end = 0.0

    def getStart(self):
        self.__start = time.time()
        return self

    def getEnd(self):
        self.__end = time.time()
        return self

    def getCostTime(self):
    	return self.__end - self.__start

    def printTime(self):
        print("time cost:",self.__end - self.__start)

time_second = random.randint(1, int(sys.argv[1]))

t = Timer()

s = t.getStart()

time.sleep(time_second)

e = t.getEnd()
print({"time cost":str(t.getCostTime())})