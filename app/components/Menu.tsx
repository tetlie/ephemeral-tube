import { motion } from 'framer-motion'

const menuVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
}

const Menu = () => (
  <motion.div
    className="fixed top-0 left-0 py-8 w-full h-full backdrop-blur-3xl bg-black/20 z-40"
    variants={menuVariants}
    initial="hidden"
    animate="visible"
    exit="hidden"
  >
    {/* Content of your menu here */}
    <div className="mt-8 border-t pt-8 mx-8 pb-16 h-full  text-white text-lg overflow-scroll">
      <div className="max-w-[750px]">
        <h1 className="text-4xl lg:text-5xl">Title</h1>
        <div className=" mt-8">
          <p>
            In the ever-expanding universe of YouTube, countless videos remain unseen, their
            existence nearly invisible against the backdrop of viral content. This collection
            explores the quiet world of these hidden creations, offering a reflection on the nature
            of digital artistry in solitude. Each video, unseen by the world, represents a singular
            act of creation, a testament to the personal drive to express, irrespective of an
            audience.
          </p>
          <br />
          <p>
            This exhibit delves into the poetics of the unseen, highlighting the beauty and
            introspection found in videos that have never caught the public eye. It invites viewers
            to consider the value of creative work beyond the metrics of views and likes, urging a
            deeper appreciation for the act of creation itself. Through this lens, we explore not
            just the content, but the stories and dreams encapsulated within these digital time
            capsules.
          </p>
          <br />
          <p>
            Here, art is liberated from the constraints of visibility, celebrated for its existence
            rather than its consumption. This collection is a tribute to all creators who brave the
            vast digital landscape to express themselves, regardless of recognition, reminding us
            that the essence of creativity lies in expression, not in acknowledgment.
          </p>
        </div>
      </div>
    </div>
  </motion.div>
)

export default Menu
