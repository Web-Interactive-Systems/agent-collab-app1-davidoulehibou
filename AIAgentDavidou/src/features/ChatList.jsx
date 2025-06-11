//import { Markdown } from "@/components/Markdown";
import { FaceIcon, PersonIcon } from "@radix-ui/react-icons";
import { Box, Flex } from "@radix-ui/themes";
import { styled } from "@/lib/stitches";
import { useStore } from "@nanostores/react";
import { $messages } from "@/store/messages";

const BoxMessage = styled("div", {
  display: "flex",
  flexDirection: "column",
  "& span":{
    margin:"10px"

  },

  "& p": {
    padding: "10px",
    borderRadius: "10px",
    width: "max-content",
    margin:"0"
  },
  "&.user p": {
    backgroundColor: "#bea6ff",
  },
  "&.assistant p": {
    backgroundColor: "#b5ffb5",
  },
  "&.user": {
    alignItems: "flex-end",
  },
});

function ChatList() {
  const messages = useStore($messages);

  return (
    <Flex direction="column" gap="2" overflow="scroll" overflowX="hidden">
      {messages.map((message) => (
        <BoxMessage className={message.role}>
          <span>{message.role}</span>
          <p>{message.content}</p>
        </BoxMessage>
      ))}
    </Flex>
  );
}

export default ChatList;
