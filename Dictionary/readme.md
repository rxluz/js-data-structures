### Dictionaries/maps

Dictionaries _(also known as a map)_ are a collection of sequential and unique keys, differently from a set you where you have a unique value, in a map you have a unique key and each key contains a value, this structure allows adding duplicate values since the key is different, we have several examples of sets:

1.  An address book
1.  Store the location of an item in a warehouses
1.  Create a product and price list
1.  Define the room allocation in a hotel
1.  A dictionary Flanders-English/English Flanders 😂

![](https://cdn-images-1.medium.com/max/1600/0*S1hDw7Vk3n1HoC-Z.gif)

This readme will cover the following content:

- **Basic structure**
- **Dictionary/map methods**
- **Using the ES6 Map**
- **Instantiating our Dictionary**
- **Time and space complexity**

### Basic structure

Let’s create a function that will allow us to output only the public Map methods. working like a closure, avoiding changes in internal attributes, the skeleton will be:

    function Map() {
      let items = {}

      class PublicMap {
        ...the map methods will be here
      }

      return new PublicMap()
    };

With this approach, the only public methods will be the methods included in `PublicMap` class:

### Dictionary/map methods

After we created the basic structure we are ready to implement the required set methods:

- **has**: Returns if a set contains an item or not.
- **set**: Allows add a new item inside a set.
- **delete**: Remove a specific item from a set.
- **get**: Search the element value using its key.
- **clear**: Remove all items from a set.
- **size**: Returns the set number of items.
- **keys**: Return all dictionary keys.
- **values**: Returns how many items there are inside a set

_Note: In order to create a set you need to create the method _`has`_ before the other methods, once this will be used by the other methods._

**has(item)**
To check if the required item is inside our set, and we have some different ways to do that:

    has(
    ) {
      return items.hasOwnProperty(key)
    }

Or:

    has(
    ) {
      return key in items
    }

Or:

    has(
    ) {
      return typeof items[key] !== 'undefined'
    }

I prefer the second approach because the syntax is nicer and cleaner than
others.

**set(key, value)**
The process to set an item is simple, first, we check if this item exists in the current map, if exists we increment the size variable, after that, we create or update the item.

    set(key, value){
      if(!this.has(key)){
        size++
      }

      items[key] = value
      return true
    }

**delete(key)**
In order to delete an item, we need to check if the item exists, if exists we decrement the size variable, after that, we simply use the [delete operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete) to run this operation.

    delete(key){
      if(this.has(key)){
        size--
        delete items[key]
      }

      return true
    }

**clear()**
To clear all items from a dictionary we need to restore the items object and size variable to its original state.

    clear(){
      items = {}
      size = 0
    }

**size()**
In our approach, we are using the size variable to control the Map size, it helps to get the total items without the need to traverse all items in our Map.

    size(){
      return size
    }

Without this approach, we’ll need to use `Object.keys(item).length`, the problem is when we use this we are using a slower operation to do that, in the time and complexity session this is better explained.

**keys()**
To get all Map keys we have some ways to do that, first use the `for..in` loop:

    values(){
      let keysList = []
      for(let key in items){
        valuesList.push(key)
      }

    return   keysList
    }

But the best way is simply to return the `Object.keys`:

    values(){
      return Object.keys(items)
    }

**values()**To get all Map values we have some ways to do that, first use the `for..in` loop:

    values(){
      let valuesList = []
      for(let key in items){
        valuesList.push(items[key])
      }

      return valuesList
    }

But the best way is simply to return the `Object.values`:

    values(){
      return Object.values(items);
    }

### Using the ES6 Map

We could use the native JS method Map to do what we did with our code, let’s try an example from [MDN Maps documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map):

### Instantiating our Map

After declaring your Map, you could call it in this way:

    const myMap = new
    ();

    myMap.set("hello", "ola");

    myMap.has("hello");

    myMap.size()

    myMap.values()

    myMap.delete("hello");

    myMap.clear()

### Time and space complexity

**Time complexity** defines **how faster** is your algorithm, and **space complexity** defines how **much memory your algorithm needs to run.**

![](https://cdn-images-1.medium.com/max/1600/1*SB5fLibxprTSNLx9We07ow.png)
From [http://bigocheatsheet.com/](http://bigocheatsheet.com/)

Let’s analyse the methods inside our queue to find out this:

- **set**: We have **O(1) to time and O(1) to space**, once the time and memory that we need to run this operation remains the same regardless of the number of items inside our Map.
- **delete**: Same thing here, **O(1) to time and O(1) to space**.
- **has**: Differently from arrays we don’t need to traverse the items inside a map to check if an item exists or not, also we don’t need store any additional information in memory to run this operation, thus this is **O(1) to time and O(1) to space**.
- **clear**: When we clear our map we simply redefine the items object to an empty one, this operation is **O(1) to time and to space because** will take the same time and memory regardless of the map size.
- **size**: We are using the variable size to control the set length, with this approach this operation takes the same time and space even with millions of items, thus **O(1) to time and space**.
- **keys**: To get all keys and output them in array format the Object.keys function will need under the hood to transverse all items inside our map, push each one to a temporary array and output them, it means that bigger maps will take more time and space to run this same operation, so **O(n) to time and space.**
- **values**: Same thing here, **O(n) to time and space.**
