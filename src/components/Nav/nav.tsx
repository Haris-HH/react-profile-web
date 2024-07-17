import Meteors from "@/components/MagicUI/meteors"

function Nav() {
  return (
    <section id="nav">
      <div className="relative flex h-full w-[20rem] items-center justify-center overflow-hidden bg-[#333333]">
        <Meteors number={50} />
        <div id="web-nav" className="grid grid-cols-[32rem] text-[#EEEEEE] dark:text-[#333333]">
          <p className="text-center text-3xl font-medium mb-[30px]">
            Haris Heamanunt
          </p>
          <a href="/" className="text-center text-[1rem] mb-[5px] font-medium hover:underline underline-offset-1">
            Main menu
          </a>
          <a href="/profile" className="text-center text-[1rem] mb-[5px] font-medium hover:underline underline-offset-1">
            Profile
          </a>
          <a href="/resume" className="text-center text-[1rem] mb-[5px] font-medium hover:underline underline-offset-1">
            Resume
          </a>
          <a href="/skill" className="text-center text-[1rem] mb-[5px] font-medium hover:underline underline-offset-1">
            Skill
          </a>
          <a className="text-center text-[1rem] font-medium mb-[5px] hover:underline underline-offset-1">
            Hobbies
          </a>
          <a href="/contract" className="text-center text-[1rem] font-medium mb-[5px] hover:underline underline-offset-1">
            Contact
          </a>
        </div>
      </div>
    </section>
  )
}

export default Nav