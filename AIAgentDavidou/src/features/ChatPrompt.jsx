import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { Button, Flex, TextArea } from "@radix-ui/themes";
import { useRef, useState } from "react";
import { styled } from "@/lib/stitches";



const PrompContainer = styled("div", {
  width: "100%",
  padding: "12px 18px",
  borderRadius: "18px 18px 0 0",
  background: "white",
});

const PromptArea = styled(TextArea, {
  width: "100%",
  boxShadow: "none",
  outline: "none",

  "& textarea": {
    border: "0px",
    outline: "none",
    background: "none",
  },
});

function ChatPrompt({AddPrompt}) {
  const [isPromptEmpty, setIsPromptEmpty] = useState(true)

  const promptRef = useRef(null)


  console.log("test")


  const onTextChange = (e) => {
    promptRef.current = e.target.value
    // console.log("onTextChange", e.target.value);
    // setPrompt(e.target.value);
    setIsPromptEmpty(promptRef.current.trim().length === 0)
  };

  const onSendPrompt = async () => {
    console.log("onSendPrompt", promptRef);
    const message = {
      content: promptRef.current,
      role:"user",
      id:Math.random()
    }
    AddPrompt(message)
  };

  return (
    <Flex justify="center" mt="auto" width="100%">
      <PrompContainer>
        <Flex align="center" direction="column">
          <PromptArea
            placeholder="Comment puis-je aider..."
            onChange={onTextChange}
          />

          <Flex justify="end" width="100%">
            <Button onClick={onSendPrompt} 
            disabled={isPromptEmpty}>
              <PaperPlaneIcon />
            </Button>
          </Flex>
        </Flex>
      </PrompContainer>
    </Flex>
  );
}

export default ChatPrompt;
