---
title: "Building an External Store for React"
description: "Ever wondered how libraries like Zustand and Jotai work? Let's find out by building our own external store in React!"
tags: ["React", "JavaScript", "TypeScript"]
publishDate: "01-29-2023"
---

In your time building React applications, you may have pulled in handly libraries like [zustand](https://github.com/pmndrs/zustand) or [jotai](https://jotai.org/) to handle state in your app. Something that I always found interesting about these libraries is their ability to construct data stores or primitives outside of React, and yet still allow for the use of that external state inside of React components while still causing rerenders as expected. Let's take a look at building our own simple version of these libraries that will allow us to create a data store, read and write data to it, and use it on our React components.
