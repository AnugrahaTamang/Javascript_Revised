# Map

- Map is a collection of keyed data items, just like an object. But the main difference is that Map allows keys of any type.

1. new Map() – creates the map.
2. map.set(key, value) – stores the value by the key.
3. map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
4. map.has(key) – returns true if the key exists, false otherwise.
5. map.delete(key) – removes the element (the key/value pair) by the key.
6. map.clear() – removes everything from the map.
7. map.size – returns the current element count.

# Set

- A set is a special type of collection - "set of values" (without keys), where each value may occur only once.

1. new Set([iterable]) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
2. set.add(value) – adds a value, returns the set itself.
3. set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
4. set.has(value) – returns true if the value exists in the set, otherwise false.
5. set.clear() – removes everything from the set.
6. set.size – is the elements count.
