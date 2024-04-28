const Services = () => {
  return (
    <section className=" text-gray-800 py-8">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
          <img src="https://source.unsplash.com/random/480x360" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Our Services</h3>
            <span className="text-xs dark:text-gray-600">February 19, 2021</span>
            <p>Going to church is probably the most important thing people do in their lives. Many people center and build their lives around going and talking about what religion they associate with for a couple of hours.</p>
          </div>
        </a>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?1" />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Our Team</h3>
              <span className="text-xs dark:text-gray-600">January 21, 2021</span>
              <p>Going to church is probably the most important thing people do in their lives. Many people center and build their lives around going and talking about what religion they associate with for a couple of hours</p>
            </div>
          </a>
          <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?2" />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Our Goal</h3>
              <span className="text-xs dark:text-gray-600">January 22, 2021</span>
              <p>Going to church is probably the most important thing people do in their lives. Many people center and build their lives around going and talking about what religion they associate with for a couple of hours.</p>
            </div>
          </a>
          <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?3" />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Our MIssion</h3>
              <span className="text-xs dark:text-gray-600">January 23, 2021</span>
              <p>Going to church is probably the most important thing people do in their lives. Many people center and build their lives around going and talking about what religion they associate with for a couple of hours.</p>
            </div>
          </a>
          <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?4" />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Our Plan</h3>
              <span className="text-xs dark:text-gray-600">January 24, 2021</span>
              <p>Going to church is probably the most important thing people do in their lives. Many people center and build their lives around going and talking about what religion they associate with for a couple of hours.</p>
            </div>
          </a>
          <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?5" />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
              <span className="text-xs dark:text-gray-600">January 25, 2021</span>
              <p>Going to church is probably the most important thing people do in their lives. Many people center and build their lives around going and talking about what religion they associate with for a couple of hours.</p>
            </div>
          </a>
          <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?6" />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Our Commit</h3>
              <span className="text-xs dark:text-gray-600">January 26, 2021</span>
              <p>Going to church is probably the most important thing people do in their lives. Many people center and build their lives around going and talking about what religion they associate with for a couple of hours.</p>
            </div>
          </a>
        </div>
        <div className="flex justify-center">
          <button type="button" className="relative px-6 py-3 ml-4 overflow-hidden font-semibold rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">Load more posts...</button>
        </div>
      </div>
    </section>
  );
};

export default Services;
