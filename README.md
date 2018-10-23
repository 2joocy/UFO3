# UFO3

### Made by Chris Rosendorf, Viktor Christiansen & William Pfaffe

When utilizing communication between devices on the internet there is a delay called “ping”. The further away a server is, the bigger delay. In cases such as video games, you will need to consider the delay in network calculations, but in normal TCP/HTTP communication, it isn’t necessary. It can still cause “slower” web deliveries.

We expect that the further away a server is, the bigger the delay (or ping/ms is)

We planned to create a simple program that could ping all 3 servers, and report these results. To ensure that we minimized inconsistencies between each run, we ran each test multiple times, and also increased and decreased time between each ping.

Experimental Code Here:
https://github.com/2joocy/UFO3

Results are displayed here: 
https://pastebin.com/JtMDb4rx

We used NodeJS to write the script, and we utilized a library called “ping” to sort out sockets for us.

https://www.npmjs.com/package/ping

There are quite a lot of benefactors to this, such as the language it’s written in, in terms of performance. This is quite small of a margin, however it can cause the results to fluctuate a little. 

The next thing that could affect the speed and consistancy of the experiment is the library used, and how it’s written. It could be bloated, causing results to fluctuate, or it could be lightweight and have little to no result on the ping times. The library uses NodeJS sockets, which is as performant as you can get with NodeJS. 

Another thing is the internet itself, which can be a bit unreliable in terms of such delicate tests. That could be the cause of the minimal swings between ping times in our results.

