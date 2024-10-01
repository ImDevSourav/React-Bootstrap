import React from 'react'

const Card = ({username = "other" , post = "Not Assigned yet" }) => {
  return (
    <div>
         <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-6/407675222_3526365951026144_989681376812659813_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=xPD7qk0aQs8Q7kNvgEmfdEi&_nc_ht=scontent.fccu3-1.fna&_nc_gid=AyvS_UtRbtzvFO_SymAGB0A&oh=00_AYCKFuuLCBybs8eU5F_UY-IgB9rSWBwIcHu_30wGsOQr0A&oe=66F4D213" alt="" width="384" height="512"/>
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        {username}
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        {post}
      </div>
    </figcaption>
  </div>
</figure>
    </div>
  )
}

export default Card