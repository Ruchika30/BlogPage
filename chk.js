nodes = [
  {
    blogs: [
      {
        Title: "First Blog",
        Description:
          "So, you’ve set up your blog. Congrats! You’ve chosen the name,  got a great looking WordPress or Tumblr theme,  and everything looks exactly the way you dreamed it would.",
        id: 1,
      },
      {
        Title: "Fifth Blog",
        Description:
          "So, you’ve set up your blog. Congrats! You’ve chosen the name,  got a great looking WordPress or Tumblr theme,  and everything looks exactly the way you dreamed it would.",
        id: 5,
      },
      {
        Title: "Sizth blg",
        Description:
          "I have been building a responsive static site(e.g. render differently when browser resizes). Now I know that it probably doesn't fill gatsby's paradigm? But would it be possible to blend certain client side javascript code in gatsby pages or layouts?",
        id: 6,
      },
      {
        Title: "Seventh Blog",
        Description:
          "I have been building a responsive static site(e.g. render differently when browser resizes). Now I know that it probably doesn't fill gatsby's paradigm? But would it be possible to blend certain client side javascript code in gatsby pages or layouts?",
        id: 7,
      },
      {
        Title: "Eigth blog",
        Description:
          "I have been building a responsive static site(e.g. render differently when browser resizes). Now I know that it probably doesn't fill gatsby's paradigm? But would it be possible to blend certain client side javascript code in gatsby pages or layouts?",
        id: 8,
      },
    ],
  },
  {
    blogs: [
      {
        Title: "Second Blog",
        Description:
          "So, you’ve set up your blog. Congrats! You’ve chosen the name,  got a great looking WordPress or Tumblr theme,  and everything looks exactly the way you dreamed it would.",
        id: 2,
      },
      {
        Title: "Third Blog",
        Description:
          "So, you’ve set up your blog. Congrats! You’ve chosen the name,  got a great looking WordPress or Tumblr theme,  and everything looks exactly the way you dreamed it would.",
        id: 3,
      },
      {
        Title: "Fourth Blog",
        Description:
          "So, you’ve set up your blog. Congrats! You’ve chosen the name,  got a great looking WordPress or Tumblr theme,  and everything looks exactly the way you dreamed it would.",
        id: 4,
      },
    ],
  },
]

// nodes.map(nested => nested.map(element => console.log("item", element)))

const valu = nodes.map(item =>  
    item.blogs.map(item  => 
        console.log("item", item.id))
        )
            

