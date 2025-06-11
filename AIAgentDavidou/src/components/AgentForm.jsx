import React from "react";
import { useStore } from "@nanostores/react";
import { $formData, $selectedAgentId, $isEditMode } from "@/store/agentForm";
import { $agents } from "@/store/agents";
import { Box, TextField, TextArea, Button, Flex, Text, Slider } from "@radix-ui/themes";
import EmojiPicker from "./EmojiPicker";

function AgentForm() {
  const form = useStore($formData);
  const isEdit = useStore($isEditMode);

  const handleChange = (key, value) => {
    $formData.set({ ...$formData.get(), [key]: value });
  };

  const handleSave = () => {
    const data = $formData.get();

    if (!data.title || !data.role) return alert("Le titre et le rôle sont obligatoires");

    const agents = $agents.get();

    if (isEdit) {
      $agents.set(agents.map((a) => (a.id === data.id ? data : a)));
    } else {
      $agents.set([...agents, { ...data, id: Math.random().toString() }]);
    }

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
  };

  return (
    <Box p="4" mt="4" style={{ border: "1px solid #ccc", borderRadius: 8 }}>
      <Text size="4" weight="bold" mb="2">
        {isEdit ? "Modifier un agent" : "Créer un agent"}
      </Text>

      <Flex direction="column" gap="3">
        <EmojiPicker
          value={form.emoji}
          onSelect={(emoji) => handleChange("emoji", emoji)}
        />

        <TextField.Root
          placeholder="Titre"
          value={form.title}
          onChange={(e) => handleChange("title", e.target.value)}
        />

        <TextArea
          placeholder="Rôle"
          value={form.role}
          onChange={(e) => handleChange("role", e.target.value)}
        />

        <TextField.Root
          placeholder="Type de réponse attendue"
          value={form.desired_response}
          onChange={(e) => handleChange("desired_response", e.target.value)}
        />

        <Box>
          <Text size="2" color="gray">Température ({form.temperature})</Text>
          <Slider
            min={0}
            max={1}
            step={0.01}
            value={[form.temperature]}
            onValueChange={([val]) => handleChange("temperature", val)}
          />
        </Box>

        <Flex justify="end">
          <Button onClick={handleSave} variant="solid" color="violet">
            Enregistrer
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default AgentForm;
