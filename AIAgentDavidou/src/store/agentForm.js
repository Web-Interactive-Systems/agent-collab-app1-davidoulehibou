import { atom, computed } from 'nanostores';

export const $formData = atom({
  id: '',
  emoji: '',
  title: '',
  role: '',
  response_format: 'text',
  temperature: 0.7,
  desired_response: '',
});

export const $selectedAgentId = atom(null);

export const $isEditMode = computed($selectedAgentId, (id) => id !== null);
