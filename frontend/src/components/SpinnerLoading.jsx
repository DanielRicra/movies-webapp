
const SpinnerLoading = ({ title = '', className = '' }) => {
   return (
      <div className={`w-full flex flex-col ${className} items-center justify-center`}>
         <p className="text-lg text-gray-300 font-normal tracking-wider">{title}</p>
         <div className="lds-ring">
            <div></div><div></div><div></div><div></div>
         </div>
      </div>
   )
}

export default SpinnerLoading