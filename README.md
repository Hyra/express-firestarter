# 🔥 Express Firestarter 🔥

This boilerplate app, based on the awesome Express Generator, comes bundled with some extra useful goodies:

- MongoDB                              through Mongoose 🐤
- Realtime                             through Socket.IO 🕰
- Queueing                             through Kue (/w Redis) 🚀
- Vue                                  through .vue components 📦
- Hot Module Replacement               through magic 🔥
- Services (such as mongo and redis    through Docker Compose 🐳
- Worker process                       through concurrent processes 🔨
- Buildscript                          through Makefile 🦄

## Reasoning

The boilerplate code you get when you run the [express generator](https://expressjs.com/en/starter/generator.html) is absolute great. However, it's not quite complete.

I usually find myself adding the ability to use a database, add realtime-ness, implement queueing and write some sort of build script. Rather than doing this every time I want to tinker on a new project and get lost in the foundation, this boilerplate should be a nice starting point.

**At the same time I really want to avoid bloatcode, so it will only consist of things I actually use often enough.**

## Opiniated

Is this codebase opiniated? Absolutely.

## Roadmap

There's no roadmap as such. I'll try to keep the libraries up to date, and will add a feature when I find myself using it often enough. I don't intend to turn this into a framework or one size fits all, just trying to be helpful to give new projects a leg up by providing a more complete starting point.