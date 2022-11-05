import Link from "next/dist/client/link"
export default function Login(){


    return(
        <div  className=" bg-gradient-to-r from-blue-400 to-blue-700  min-h-screen w-full flex justify-center items-center">
        <div className="flex gap-2 items-center w-[800px] h-[700px] bg-white rounded-[50px]">

        <div className="flex flex-col justify-center   gap-2 p-4 m-4 ml-12">
          <div>
            <h2 className="text-4xl font-semibold mb-5">Login</h2>
          </div>
          <form className="flex flex-col gap-5">
            <input className="w-[280px] h-[50px] border-2 rounded-lg p-3" type='text' placeholder="Username"></input>
            <input className="w-[280px] h-[50px] border-2 rounded-lg p-3" type='text' placeholder="Password"></input>
            <div className="flex w-full  ">
              <div className="flex justify-start w-1/2">
                <Link href='/signupPage'><h6 className="flex font-medium text-sm">Create Account</h6></Link>
              </div>
              <div className="flex justify-end w-1/2">
                <h6 className="flex  font-medium text-sm">Forgot Password ?</h6>
              </div>

              
            </div>
            <button className="flex justify-center items-center bg-blue-700 text-white rounded-2xl h-[50px] shadow-xl hover:bg-blue-600">Continue</button>
            <div className="flex justify-center">
              <h3 className="font-semibold">OR</h3>
            </div>
            <div className="border-[1px] border-black h-[50px] rounded-2xl flex justify-center items-center">
              <img src="https://img.icons8.com/fluency/48/null/google-logo.png" className="h-[25px]"/>
              <button className=" px-3">Sign in with Google</button>
            </div>
            
          </form>

        
        </div>  

      </div>
      </div>    
    )
}