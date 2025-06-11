import AgentList from "@/components/AgentList";
import AgentForm from "@/components/AgentForm";
import { Resizable } from "@/components/Resizable";
import Chat from "@/features/Chat";
import { Flex, Box } from "@radix-ui/themes";
import { useStore } from "@nanostores/react";
import { $formData, $selectedAgentId } from "@/store/agentForm";


function Home() {
    const form = useStore($formData);
  const selectedId = useStore($selectedAgentId);
  const shouldShowForm = selectedId !== null || form.id === "";
  return (
    <Flex gap="8" width="100%" height="100%">
      <AgentList/>
      {shouldShowForm && <AgentForm />}

      <Resizable
        class="resizable"
        style={{
          background: "var(--focus-a3)",
          borderLeft: "1px solid var(--gray-9)",
          marginLeft: "auto",
        }}
        enable={{
          top: false,
          right: false,
          bottom: false,
          left: true,
          topRight: false,
          bottomRight: false,
          bottomLeft: false,
          topLeft: false,
        }}
      >
        <Chat />
      </Resizable>
    </Flex>
  );
}

export default Home;
