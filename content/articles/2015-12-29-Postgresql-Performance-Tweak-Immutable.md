---
layout: post
title: Postgresql Performance Tweak - Immutable
tags: programming postgresql
createdAt: '2015-12-29T00:00:00.000Z'
updatedAt: '2015-12-29T00:00:00.000Z'
---

In PostgreSQL, every function has one of the possible volatility classifications: **volatile**, **static** and **immutable**. When it is not specified, PostgreSQL assumes that it is a volatile function, which is not always the case.

<!--more-->

**TL;DR**

**Volatile:** functions with side-effects.

**Immutable:** pure functional functions.

**Stable:** smth in between. (wow, such explanation, very clear _applause_)

Yes, IMHO stable is utterly error-prone and you need to consult to the documentation. Sorry that TL;DR was inadequate :( ..(but.. it is supposed to be inadequate by definition right?? whatever..)

<div style="text-align:center" markdown="1">

<article-image src="jake_amazed.gif" alt=""></article-image>

<!-- *The moment of discovery of immutable* -->
</div>

So, I’d like to draw your attention to immutable functions before this post gets too long. When declaring a function, using the immutable keyword actually implies the following:

- I solemnly swear that my function **does not modify** the db.

- It does not do any database lookups.

- Given the same arguments, it **ALWAYS** returns the same output.

**BEWARE:** As stated in the PostgreSQL documentation, your function should be volatile if you use anything like **random()**, **currval()**, **timeofday()**, **current_timestamp()**, etc. in your function.

**Reader:** _“So, like.. when shall I use immutable functions? “_

Recently, we had to implement a hash function and it was much more appropriate to do the job in PL / pgSQL. So it was all sunshine and lollipops, the hash function came out well etc. But unfortunately it was a tad bit slow. To fix this issue, we just altered the volatility classification of some helper functions. For example, a function that converts characters into ascii values was perfectly suitable to use the immutable keyword!
