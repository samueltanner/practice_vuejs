/* global Vue */
var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Hello from JavaScript!",
    };
  },
});

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You were a big idiot on ' + new Date().toLocaleString()
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'one two three 4!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})

var app7 = new Vue({
  el: '#app-7',
  data: function() {
    return {
      header: "This header was generated in vue",
      text: ""
    };
  },
  methods: {
    reverseText: function() {
      this.text = this.text.split("").reverse().join("");
    }
  }
});

var app8 = new Vue({
  el: '#app-8',
  data: function() {
    return {
      fruits: ["apple", "orange", "pomegranate"],
      newFruit: ""
    };
  },
  methods: {
    addNewFruit: function() {
      this.fruits.push(this.newFruit);
      this.newFruit = "";
    }
  }
});