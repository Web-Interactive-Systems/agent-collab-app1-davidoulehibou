import React from "react";
import { Card, Flex, Box, Text, IconButton } from "@radix-ui/themes";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { useStore } from "@nanostores/react";
import { $selectedAgentId, $formData } from "@/store/agentForm";
import { $agents } from "@/store/agents";
import { styled } from "@/lib/stitches";

const StyledCard = styled(Card, {
  width: "200px",
  padding: "16px",
  borderRadius: "12px",
  transition: "background 0.3s",
  cursor: "pointer",
  backgroundColor: "var(--color-panel)",
  "&.selected": {
    backgroundColor: "var(--focus-7)",
  },
});

function AgentCard({ agent }) {
  const selectedId = useStore($selectedAgentId);

  const isSelected = selectedId === agent.id;

  const handleEdit = () => {
    $selectedAgentId.set(agent.id);
    $formData.set({ ...agent });
  };

  const handleDelete = () => {
    $agents.set($agents.get().filter((a) => a.id !== agent.id));
    if (isSelected) {
      $selectedAgentId.set(null);
      $formData.set({
        id: "",
        emoji: "😀",
        title: "",
        role: "",
        response_format: "text",
        temperature: 0.7,
        desired_response: "",
      });
    }
  };

  return (
    <StyledCard className={isSelected ? "selected" : ""}>
      <Flex direction="column" gap="2">
        <Text size="4" align="center">{agent.emoji}</Text>
        <Text weight="bold">{agent.title}</Text>
        <Text size="2" color="gray">{agent.role}</Text>

        <Flex justify="end" gap="2" mt="2">
          <IconButton onClick={handleEdit} size="1" variant="soft" color="blue">
            <Pencil1Icon />
          </IconButton>
          <IconButton onClick={handleDelete} size="1" variant="soft" color="red">
            <TrashIcon />
          </IconButton>
        </Flex>
      </Flex>
    </StyledCard>
  );
}

export default AgentCard;
