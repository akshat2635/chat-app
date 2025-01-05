import React, { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import MessagesInput from "./MessagesInput";
import ChatHeader from "./ChatHeader";
import MessageSkeleton from "./skeletons/MessageSkeleton";
import { useAuthStore } from "../store/useAuthStore";

const ChatContainer = () => {
  const { selectedUser, messages, getMessages, isMessagesLoading } =
    useChatStore();
  const { user } = useAuthStore();
  useEffect(() => {
    getMessages(selectedUser._id);
  }, [getMessages, selectedUser]);
  if (isMessagesLoading) {
    return (
      <div className="flex-1 flex flex-col overflow-auto">
        <ChatHeader />
        <MessageSkeleton />
        <MessagesInput />
      </div>
    );
  }
  const formatMessageTime=(date) =>{
    return new Date(date).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  }
  return (
    <div className="flex-1 flex flex-col overflow-auto">
      <ChatHeader />
      <div className="flex-1 overflow-y-auto p-4  space-y-4">
        {messages.map((message) => {
          return (
            <div
              key={message._id}
              className={`chat ${
                message.senderId === user._id ? "chat-end" : "chat-start"
              }`}
            >
              <div className="chat-image avatar">
                <div className="size-10 rounded-full">
                    <img 
                    src={
                        message.senderId === user._id
                        ? user.profilePic
                        : selectedUser.profilePic
                    }
                    />
                </div>
              </div>
              <div className="chat-header">
                <time className="text-xs opacity-50 ml-1">
                  {formatMessageTime(message.createdAt)}
                </time>
              </div>
              <div className="chat-bubble flex flex-col">
              {message.image && (
                <img
                  src={message.image}
                  alt="Attachment"
                  className="sm:max-w-[200px] rounded-md mb-2"
                />
              )}
              {message.text && <p>{message.text}</p>}
            </div>
            </div>
          );
        })}
      </div>
      <MessagesInput />
    </div>
  );
};

export default ChatContainer;
