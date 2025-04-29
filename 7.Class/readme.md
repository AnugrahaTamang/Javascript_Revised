# What is the Class?

- Class is the blueprint of creating object. Javascript class is like a function.

# Inheritance

- Class inheritance is a way for one class to extend another class.

1. To extend a class: class Child extends Parent:

- That means Child.prototype.**proto** will be Parent.prototype, so methods are inherited.

2. When overriding a constructor:

- We must call parent constructor as super() in Child constructor before using this.

3. When overriding another method:

- We can use super.method() in a Child method to call Parent method.

4. Internals:

- Methods remember their class/object in the internal [[HomeObject]] property. That’s how super resolves parent methods.
  So it’s not safe to copy a method with super from one object to another.
