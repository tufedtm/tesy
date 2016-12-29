class Singleton(type):
    _instances = {}
    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:
            cls._instances[cls] = super(Singleton, cls).__call__(*args, **kwargs)
        return cls._instances[cls]


# def singleton(cls):
#   instance = {}

#   def get_instance():
#     if not instance:
#       instance[cls] = cls()

#     return instance[cls]

#   return get_instance

# def singleton(cls):
#     instances = {}
#     def getinstance():
#         if cls not in instances:
#             instances[cls] = cls()
#         return instances[cls]
#     return getinstance

# @singleton
class MyClass(metaclass=Singleton):
  asd = 'asd'
  _asd = 'qwe'
  __asd = 'zxc'

a = MyClass()
b = MyClass()

print(a)
print(b)
print(a.asd)
print(b.asd)
b.asd = 'asds'
print(b.asd)
print(a.asd)
print(a is b)
print(MyClass.asd)
print(MyClass._asd)
# print(MyClass.__asd)
print(MyClass._MyClass__asd)
print(b.asd)
print(b._asd)
# print(b.__asd)
print(b._MyClass__asd)
MyClass._MyClass__asd = 'cvb'
print(b._MyClass__asd)
b._MyClass__asd = 'tyu'
print(b._MyClass__asd)
print(a._MyClass__asd)