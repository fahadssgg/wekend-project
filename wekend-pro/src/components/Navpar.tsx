interface NavparProps {
  Logein: boolean;
}

export default function Navpar(prop: NavparProps) {
  return (
    <div>
      <nav className="w-full rounded-b-sm px-5 py-3 bg-neutral-900">
        <ol className="list-reset flex">
          {prop.Logein ? (
            <>
              <li>
                <a
                  href="/"
                  className="text-red-600 transition duration-150 ease-in-out hover:text-gray-300   "
                >
                  LogOut
                </a>
              </li>
              <li>
                <span className="mx-2 dark:text-neutral-300">/</span>
              </li>
              <li>
                <a
                  href="/home"
                  className="text-white transition duration-150 ease-in-out hover:text-gray-300   "
                >
                  Home
                </a>
              </li>
            </>
          ) : (
            <>
              <li>
                <a
                  href="/Login"
                  className="text-white transition duration-150 ease-in-out hover:text-gray-300   "
                >
                  LogIn
                </a>
              </li>
              <li>
                <span className="mx-2 dark:text-neutral-300">/</span>
              </li>
              <li>
                <a
                  href="/Singup"
                  className="text-white transition duration-150 ease-in-out hover:text-gray-300 "
                >
                  SingUp
                </a>
              </li>
            </>
          )}
        </ol>
      </nav>
    </div>
  );
}
