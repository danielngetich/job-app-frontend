
import React, {useState} from 'react'




function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
   
<section id="Login" class="relative flex flex-wrap lg:h-screen lg:items-center">
  <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
    <div class="mx-auto max-w-lg text-center">
      <h1 class="text-2xl font-bold sm:text-3xl">Get started today!</h1>

      <p class="mt-4 text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla
        eaque error neque ipsa culpa autem, at itaque nostrum!
      </p>
    </div>

    <form onSubmit={handleSubmit} class="mx-auto mt-8 mb-0 max-w-md space-y-4">
      <div>
        <label htmlFor="email" class="sr-only">Username:</label>

        <div class="relative">
          <input
            type="text"
            id="username"
            autoComplete="off"
            placeholder=" Please enter your username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            
          />
        </div>
      </div>

      <div>
        <label htmlFor="password" class="sr-only">Password:</label>
        <div class="relative">
          <input
            type="password"
            class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            id="password"
            autoComplete="current-password"
            placeholder=" Please enter your password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          
        </div>
      </div>

      <div class="flex items-center justify-between">
        <p class="text-sm text-gray-500">
          No account?
          <a href="/signup" class="underline">Sign up</a>
        </p>

        <button
          type="submit"
          class="ml-3 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
        >
            {isLoading ? "Loading..." : "Sign in"}
        </button>
      </div>
    </form>
  </div>

  <div class="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
    <img
      alt="Welcome"
      src="https://images.unsplash.com/photo-1529539795054-3c162aab037a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    />
  </div>
</section>

  )
}

export default Login;

