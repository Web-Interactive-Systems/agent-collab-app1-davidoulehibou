import React from "react";
import { useStore } from "@nanostores/react";
import { $agents } from "@/store/agents";
import { $formData, $selectedAgentId } from "@/store/agentForm";
import { Card, Flex, Box, Text, IconButton } from "@radix-ui/themes";
import { PlusIcon } from "@radix-ui/react-icons";
import AgentCard from "./AgentCard";

function AgentList() {
  const agents = useStore($agents);

  const handleAddAgent = () => {
    $selectedAgentId.set(null); // sort du mode édition
    $formData.set({
      id: "",
      emoji: "😀",
      title: "",
      role: "",
      response_format: "text",
      temperature: 0.7,
      desired_response: "",
    });
  };

  return (
    <Box p="4">
      <Flex justify="between" align="center" mb="4">
        <Text size="5" weight="bold">Liste des agents</Text>
        <IconButton onClick={handleAddAgent} variant="solid" color="violet" radius="full">
          <PlusIcon />
        </IconButton>
      </Flex>

      <Flex wrap="wrap" gap="4">
        {agents.map((agent) => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </Flex>
    </Box>
  );
}

export default AgentList;
