// function Footer() {
//   return (
//     <>
    
//       <footer className="bg-[#0d3e38] text-white fixed bottom-0 w-full flex justify-end">
//         <div className="flex justify-end gap-8">
//           <div>
//           <h1 className="">Contact </h1>
//           </div>
//           <div>
//           <h1>Gmail:jdskfjhk@gmail.com</h1>
//           <h1>Phone:6238393470</h1>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// }
// export default Footer;
function Footer() {
  return (
    <footer className="bg-[#0d3e38] text-white w-full">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        
        {/* Left */}
        <h1 className="text-lg font-semibold text-center sm:text-left">
          Contact
        </h1>

        {/* Right */}
        <div className="text-sm text-center sm:text-right space-y-1">
          <p>jdskfjhk@gmail.com</p>
          <p> 6238393470</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;