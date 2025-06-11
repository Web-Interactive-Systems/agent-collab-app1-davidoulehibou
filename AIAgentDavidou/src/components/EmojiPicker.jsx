import React from "react";
import { Tabs, Text, Flex, Box, ScrollArea } from "@radix-ui/themes";

import * as emojis from '../utils/emojis';

const emojiCategories = {
  Expressions: emojis.EXPRESSIONES,
  Gestures: emojis.GESTURES,
  Symbols: emojis.SYMBOLS,
  Food: emojis.FOOD,
  Activities: emojis.ACTIVITIES,
  Places: emojis.PLACES,
  Nature: emojis.NATURE,
};

function EmojiPicker({ value, onSelect }) {
  return (
    <Box>
      <Text size="2" color="gray" mb="1">
        Choisissez un emoji
      </Text>
      <Tabs.Root defaultValue={Object.keys(emojiCategories)[0]}>
        <Tabs.List>
          {Object.entries(emojiCategories).map(([category]) => (
            <Tabs.Trigger key={category} value={category}>
              {category}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        {Object.entries(emojiCategories).map(([category, emojis]) => (
          <Tabs.Content key={category} value={category}>
            <Box
              mt="2"
              display="flex"
              flexWrap="wrap"
              gap="1"
              style={{ maxHeight: '200px', overflowY: 'auto' }}
            >
              {emojis.map((emoji) => (
                <button
                  key={emoji}
                  onClick={() => onSelect(emoji)}
                  style={{
                    fontSize: '24px',
                    padding: '6px',
                    border: 'none',
                    background: value === emoji ? '#e0e0ff' : 'transparent',
                    cursor: 'pointer',
                    borderRadius: '6px',
                  }}
                >
                  {emoji}
                </button>
              ))}
            </Box>
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </Box>
  );
}

export default EmojiPicker;