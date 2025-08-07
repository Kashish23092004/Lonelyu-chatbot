import React from 'react'
import image from'../assets/image.png'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div><div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={image}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">Introducing lonelyu
</h1>
      <p className="py-6">
      We trained this little weirdo (a.k.a. LonelyU) to chat like your overly curious best friend with a hint of sass and too much caffeine.

It talks back (politely), answers your burning questions, admits when it messes up (yes, even bots aren't perfect), and might even throw in a pun or two. Got a weird question? Bring it on. LonelyU’s got jokes, facts, and probably too many opinions.

Just don’t ask it for relationship advice… it’s Lonely for a reason.
      </p>
      <Link to='/chatbot'>
      <button className="btn btn-primary">Get Started</button>
      </Link>
    </div>
  </div>
</div></div>
  )
}

export default Hero