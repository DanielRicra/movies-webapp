
const Crew = ({ crew }) => {

   const getOrderedCrewByDepartment = () => {
      let orderedByDepartment = {}
      crew.forEach(worker => {
         if (orderedByDepartment[worker.department] === undefined) {
            orderedByDepartment[worker.department] = [worker]
         } else {
            orderedByDepartment[worker.department].push(worker)
         }
      })
      return orderedByDepartment
   }

   const orderedCrew = getOrderedCrewByDepartment()
   let content = Object.keys(orderedCrew).map(department => (
         <div key={department}>
            <div className="mb-2 flex items-center after:border-gray-400
               after:content-[''] after:w-full after:flex-1 after:border-b after:block"
            >
               <h4 className="text-base text-gray-100 mr-2">{department + ' Department'}</h4>
            </div>
            <table>
               <colgroup>
                  <col className="w-44" />
                  <col className="w w-5" />
                  <col />
               </colgroup>
               <tbody>
               {orderedCrew[department].map(people =>
                  <tr key={people.id + (Math.random() * 5)} className="px-4">
                     <td className="text-gray-200 text-sm py-1 pl-3">{people.name}</td>
                     <td className="text-gray-200 text-sm py-1 pl-3">-</td>
                     <td className="text-gray-200 text-sm py-1 pl-3">{people.job}</td>
                  </tr>
               )}
               </tbody>
            </table>
         </div>
   ))
   console.log("here")

   return (
      <div className="w-full">
         <h3 className="text-gray-100 font-normal text-xl mt-6 mb-3">Crew</h3>
         <div className="py-2 flex flex-col gap-3">
            {content}
         </div>
      </div>
   )
}

export default Crew