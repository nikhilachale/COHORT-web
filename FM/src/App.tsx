import { motion, useScroll } from "motion/react"




function App() {
  motion
  const { scrollYProgress } = useScroll()
  return (
    <>
      <motion.div className="bg-green-700 h-44 rounded-md w-44 flex items-center justify-center border-3 border-yellow-200"
        animate={{
          x: [0, 500, 500, 0, 0],
          y: [0, 0, 300, 300, 0],
          rotate: [0, 360, 0, -360, 0],
        }}
        transition={{
          duration: 5,
          delay: 2,
          ease: "easeIn"
        }} >
        nikhil achale</motion.div>
      <motion.div className="bg-red-300 h-44 my-4 w-44 rounded-full flex items-center justify-center border-2 border-slate-500"
        whileHover={
          {
            backgroundColor: '#ffff',
          }
        }
        drag
        dragConstraints={{
          left: 0,
          top: 0,
        }
        }
        whileDrag={
          {
            backgroundColor: "GrayText",
            scale: 1.2
          }
        }>
        nikhil achale</motion.div>
      <motion.div
        style={{
          scaleX: scrollYProgress
        }}
        className="fixed top-0 left-0 origin-top-left bg-red-500 h-10 w-full"> </motion.div>

      <div className=" bg-black h-fit w-screen ">

        <h1 className="text-4xl text-slate-300  text-center pt-20 py-3">
          learning frammer motion
        </h1>
        <p className="text-xl text-slate-300 px-5 py-3">

          🚀 Waterfall Request Issue in React and How to Fix It

          🔍 What is a Waterfall Request Issue?

          A waterfall request issue occurs when API calls are made sequentially instead of in parallel, leading to unnecessary delays. This happens when one request waits for another to complete before starting, even when both can be fetched simultaneously.

          ⚠️ Common Causes of Waterfall Requests
          1.	Chained Fetch Calls: When the second API call is placed inside the .then() of the first request, forcing it to wait.
          2.	Incorrect useEffect Dependencies: Triggering API calls multiple times due to missing or incorrect dependencies.
          3.	Dependent API Calls Without Optimization: When one request relies on another, but they are not optimized for parallel execution.

          ✅ How to Fix Waterfall Requests
          1.	Use Promise.all(): Fetch multiple APIs in parallel instead of one by one.
          2.	Avoid Chaining Requests: If requests are independent, execute them separately.
          3.	Fetch Dependent Data More Efficiently: Instead of waiting, fetch both datasets in parallel and then filter locally.
          4.	Use React Query: A caching and data-fetching library that automatically optimizes API requests.

          🚀 Best Practices
          •	Check Network Tab in DevTools to identify waterfall issues.
          •	Use caching mechanisms to prevent unnecessary API calls.
          •	Optimize state management to avoid unnecessary re-renders.

          By fixing waterfall requests, your React app will load faster and perform better! 🚀

          🚀 Waterfall Request Issue in React and How to Fix It

          🔍 What is a Waterfall Request Issue?

          A waterfall request issue occurs when API calls are made sequentially instead of in parallel, leading to unnecessary delays. This happens when one request waits for another to complete before starting, even when both can be fetched simultaneously.

          ⚠️ Common Causes of Waterfall Requests
          1.	Chained Fetch Calls: When the second API call is placed inside the .then() of the first request, forcing it to wait.
          2.	Incorrect useEffect Dependencies: Triggering API calls multiple times due to missing or incorrect dependencies.
          3.	Dependent API Calls Without Optimization: When one request relies on another, but they are not optimized for parallel execution.

          ✅ How to Fix Waterfall Requests
          1.	Use Promise.all(): Fetch multiple APIs in parallel instead of one by one.
          2.	Avoid Chaining Requests: If requests are independent, execute them separately.
          3.	Fetch Dependent Data More Efficiently: Instead of waiting, fetch both datasets in parallel and then filter locally.
          4.	Use React Query: A caching and data-fetching library that automatically optimizes API requests.

          🚀 Best Practices
          •	Check Network Tab in DevTools to identify waterfall issues.
          •	Use caching mechanisms to prevent unnecessary API calls.
          •	Optimize state management to avoid unnecessary re-renders.

          By fixing waterfall requests, your React app will load faster and perform better! 🚀
          🚀 Waterfall Request Issue in React and How to Fix It

          🔍 What is a Waterfall Request Issue?

          A waterfall request issue occurs when API calls are made sequentially instead of in parallel, leading to unnecessary delays. This happens when one request waits for another to complete before starting, even when both can be fetched simultaneously.

          ⚠️ Common Causes of Waterfall Requests
          1.	Chained Fetch Calls: When the second API call is placed inside the .then() of the first request, forcing it to wait.
          2.	Incorrect useEffect Dependencies: Triggering API calls multiple times due to missing or incorrect dependencies.
          3.	Dependent API Calls Without Optimization: When one request relies on another, but they are not optimized for parallel execution.

          ✅ How to Fix Waterfall Requests
          1.	Use Promise.all(): Fetch multiple APIs in parallel instead of one by one.
          2.	Avoid Chaining Requests: If requests are independent, execute them separately.
          3.	Fetch Dependent Data More Efficiently: Instead of waiting, fetch both datasets in parallel and then filter locally.
          4.	Use React Query: A caching and data-fetching library that automatically optimizes API requests.

          🚀 Best Practices
          •	Check Network Tab in DevTools to identify waterfall issues.
          •	Use caching mechanisms to prevent unnecessary API calls.
          •	Optimize state management to avoid unnecessary re-renders.

          By fixing waterfall requests, your React app will load faster and perform better! 🚀
          🚀 Waterfall Request Issue in React and How to Fix It

          🔍 What is a Waterfall Request Issue?

          A waterfall request issue occurs when API calls are made sequentially instead of in parallel, leading to unnecessary delays. This happens when one request waits for another to complete before starting, even when both can be fetched simultaneously.

          ⚠️ Common Causes of Waterfall Requests
          1.	Chained Fetch Calls: When the second API call is placed inside the .then() of the first request, forcing it to wait.
          2.	Incorrect useEffect Dependencies: Triggering API calls multiple times due to missing or incorrect dependencies.
          3.	Dependent API Calls Without Optimization: When one request relies on another, but they are not optimized for parallel execution.

          ✅ How to Fix Waterfall Requests
          1.	Use Promise.all(): Fetch multiple APIs in parallel instead of one by one.
          2.	Avoid Chaining Requests: If requests are independent, execute them separately.
          3.	Fetch Dependent Data More Efficiently: Instead of waiting, fetch both datasets in parallel and then filter locally.
          4.	Use React Query: A caching and data-fetching library that automatically optimizes API requests.

          🚀 Best Practices
          •	Check Network Tab in DevTools to identify waterfall issues.
          •	Use caching mechanisms to prevent unnecessary API calls.
          •	Optimize state management to avoid unnecessary re-renders.

          By fixing waterfall requests, your React app will load faster and perform better! 🚀
        </p>

      </div>


    </>
  )
}

export default App
