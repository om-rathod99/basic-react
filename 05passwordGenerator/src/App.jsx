import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordgenrater = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*(){}[]`~";

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPaswordToClicpBoard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordgenrater();
  }, [length, numberAllowed, charAllowed, passwordgenrater]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-lg rounded-xl px-6 py-8 my-8 text-white bg-gradient-to-r from-purple-600 to-blue-500">
        <h1 className="text-center text-2xl font-bold mb-6">Password Generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-6">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-4 text-lg bg-gray-800 text-white"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="outline-none bg-green-600 hover:bg-green-500 text-white px-4 py-2 shrink-0 transition-colors duration-300"
            onClick={copyPaswordToClicpBoard}
          >
            Copy
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-x-4">
            <label className="text-lg">Length: {length}</label>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer w-full"
              onChange={(e) => setLength(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                className="cursor-pointer"
                onChange={() => setNumberAllowed((prev) => !prev)}
              />
              <label htmlFor="numberInput" className="text-lg">
                Include Numbers
              </label>
            </div>

            <div className="flex items-center gap-x-2">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="charecterInput"
                className="cursor-pointer"
                onChange={() => setCharAllowed((prev) => !prev)}
              />
              <label htmlFor="charecterInput" className="text-lg">
                Include Symbols
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App