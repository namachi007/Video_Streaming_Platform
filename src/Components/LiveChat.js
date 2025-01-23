import React, { useEffect, useState } from 'react'
import { ChatMessage } from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { getRandomComment } from '../utils/randomeComents';
import { getRandomName } from '../utils/randomName';


export const LiveChat = () => {
const dispatch = useDispatch();

const [liveMessages, setLiveMessages ] = useState("");

const messages = useSelector(state => state.chat.messages);

    useEffect(() => {
        const i = setInterval(() => {
            dispatch(
              addMessage({ name: getRandomName(), message: getRandomComment() })
            );
        },800);

        return () => clearInterval(i);

    },[])

  return (
    <div className="border-2 rounded-xl border-gray-600 h-[501px] w-96 overflow-y-scroll">
      <div className="p-3 font-semibold text-lg absolute bg-black w-[363px] rounded-t-xl shadow-[0_4px_4px_rgba(255,255,255,0.2)] ">
        Top Chat
      </div>
      <hr />
      <div className="  h-full w-full  ">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            name={message.name}
            message={message.message}
          />
        ))}
      </div>
      <form className=" w-96 absolute flex" onSubmit={(e) => 
        {e.preventDefault()
            dispatch(addMessage({ name: "You", message: liveMessages }))
            setLiveMessages("");
        }
    }>
        <input
          type="text"
          placeholder="Say something"
          className="w-5/6 p-2 bg-opacity-50 bg-black text-white border-2 border-gray-600 rounded-l-xl"
          value={liveMessages}
          onChange={(e) => setLiveMessages(e.target.value)}
        />
        <button className="w-1/6 bg-white text-black p-2 rounded-r-xl">
          Send
        </button>
      </form>
    </div>
  );
}
