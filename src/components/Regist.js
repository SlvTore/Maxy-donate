import React, { useState } from "react";

const RegisterPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nama Lengkap: ", fullName, "Email: ", email, "Password: ", password);
  };

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Halaman Registrasi</title>
      <link
        href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
        rel="stylesheet"
      />
      {/* Tombol Arrow Kembali */}
      <a
        href="index.html"
        className="absolute top-4 left-4 text-gray-600 hover:text-blue-500"
      >
        <i className="fas fa-arrow-left fa-lg" />
      </a>

      <div className="flex w-full h-screen">
        {/* Kolom Gambar */}
        <div
          className="hidden lg:flex flex-1 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/024/222/416/original/online-business-meeting-3d-character-illustration-png.png")' }}
        >
          {/* Gambar akan di sini */}
        </div>

        {/* Kolom Form Registrasi */}
        <div className="flex-1 flex items-center justify-center bg-gray-50">
          <div className="bg-white shadow-md rounded-lg p-8 w-96">
            <h2 className="text-2xl font-semibold text-center mb-6">Registrasi</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="fullName"
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Nama Lengkap"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="example@mail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Kata Sandi
                </label>
                <input
                  type="password"
                  id="password"
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="******"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition duration-200"
              >
                Daftar
              </button>
            </form>
            <div className="flex items-center justify-between mt-4">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-2 text-gray-500">Atau</span>
              <hr className="flex-grow border-gray-300" />
            </div>
            <div className="mt-4 flex justify-center space-x-4">
              {/* Button social login */}
              <button className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full hover:bg-gray-100 transition duration-200">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgNDggNDgiPgoJPHBhdGggZmlsbD0iI2ZmYzEwNyIgZD0iTTQzLjYxMSAyMC4wODNINDJWMjBIMjR2OGgxMS4zMDNjLTEuNjQ5IDQuNjU3LTYuMDggOC0xMS4zMDMgOGMtNi42MjcgMC0xMi01LjM3My0xMi0xMnM1LjM3My0xMiAxMi0xMmMzLjA1OSAwIDUuODQyIDEuMTU0IDcuOTYxIDMuMDM5bDUuNjU3LTUuNjU3QzM0LjA0NiA2LjA1MyAyOS4yNjggNCAyNCA0QzEyLjk5NSA0IDQgMTIuOTU1IDQgMjRzOC45NTUgMjAgMjAgMjBzMjAtOC45NTUgMjAtMjBjMC0xLjM0MS0uMTM4LTIuNjUtLjM4OS0zLjkxNyIgLz4KCTxwYXRoIGZpbGw9IiNmZjNkMDAiIGQ9Im02LjMwNiAxNC42OTFsNi41NzEgNC44MTlDMTQuNjU1IDE1LjEwOCAxOC45NjEgMTIgMjQgMTJjMy4wNTkgMCA1Ljg0MiAxLjE1NCA3Ljk2MSAzLjAzOWw1LjY1Ny01LjY1N0MzNC4wNDYgNi4wNTMgMjkuMjY4IDQgMjQgNEMxNi4zMTggNCA5LjY1NiA4LjMzNyA2LjMwNiAxNC42OTEiIC8+Cgk8cGF0aCBmaWxsPSIjNGNhZjUwIiBkPSJNMjQgNDRjNS4xNjYgMCA5Ljg2LTEuOTc3IDEzLjQwOS01LjE5MmwtNi4xOS01LjIzOEExMS45IDExLjkgMCAwIDEgMjQgMzZjLTUuMjAyIDAtOS42MTktMy4zMTctMTEuMjgzLTcuOTQ2bC02LjUyMiA1LjAyNUM5LjUwNSAzOS41NTYgMTYuMjI3IDQ0IDI0IDQ0IiAvPgoJPHBhdGggZmlsbD0iIzE5NzZkMiIgZD0iTTQzLjYxMSAyMC4wODNINDJWMjBIMjR2OGgxMS4zMDNhMTIuMDQgMTIuMDQgMCAwIDEtNC4wODcgNS41NzFsLjAwMy0uMDAybDYuMTkgNS4yMzhDMzYuOTcxIDM5LjIwNSA0NCAzNCA0NCAyNGMwLTEuMzQxLS4xMzgtMi42NS0uMzg5LTMuOTE3IiAvPgo8L3N2Zz4="
                  alt="Google"
                  className="w-6 h-6"
                />
              </button>
              <button className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full hover:bg-gray-100 transition duration-200">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                  alt="Facebook"
                  className="w-6 h-6"
                />
              </button>
              <button className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full hover:bg-gray-100 transition duration-200">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+Cgk8ZyBmaWxsPSJub25lIj4KCQk8cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0iI2ZmZiIgcng9IjYwIiAvPgoJCTxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjMWQ5YmYwIiByeD0iNjAiIC8+CgkJPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE5OS41NzIgOTEuNDExYy4xMSAxLjU4Ny4xMSAzLjE3NC4xMSA0Ljc3NmMwIDQ4Ljc5Ny0zNy4xNDggMTA1LjA3NS0xMDUuMDc1IDEwNS4wNzV2LS4wM0ExMDQuNTQgMTA0LjU0IDAgMCAxIDM4IDE4NC42NzdxNC4zNzkuNTI1IDguNzkuNTMzYTc0LjE1IDc0LjE1IDAgMCAwIDQ1Ljg2NS0xNS44MzlhMzYuOTggMzYuOTggMCAwIDEtMzQuNTAxLTI1LjY0NWEzNi44IDM2LjggMCAwIDAgMTYuNjcyLS42MzZjLTE3LjIyOC0zLjQ4MS0yOS42MjMtMTguNjE4LTI5LjYyMy0zNi4xOTh2LS40NjhhMzYuNyAzNi43IDAgMCAwIDE2Ljc2IDQuNjIyYy0xNi4yMjYtMTAuODQ1LTIxLjIyOC0zMi40MzItMTEuNDMtNDkuMzFhMTA0LjggMTA0LjggMCAwIDAgNzYuMTExIDM4LjU4MmEzNi45NSAzNi45NSAwIDAgMSAxMC42ODMtMzUuMjgzYzE0Ljg3NC0xMy45ODIgMzguMjY3LTEzLjI2NSA1Mi4yNDkgMS42MDFhNzQuMSA3NC4xIDAgMCAwIDIzLjQ1MS04Ljk2NWEzNy4wNiAzNy4wNiAwIDAgMS0xNi4yMzQgMjAuNDI0QTczLjUgNzMuNSAwIDAgMCAyMTggNzIuMjgyYTc1IDc1IDAgMCAxLTE4LjQyOCAxOS4xMyIgLz4KCTwvZz4KPC9zdmc+"
                  alt="Twitter"
                  className="w-6 h-6"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
