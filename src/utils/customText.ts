export enum COLORS {
  DEFAULT,
  QUOTE = 'brainfuck',
  SOLARIZED_GREEN = 'CSS',
  SOLARIZED_CYAN = 'yaml',
  SOLARIZED_BLUE = 'md',
  SOLARIZED_YELLOW = 'fix',
  SOLARIZED_ORANGE = 'glsl',
  SOLARIZED_RED = 'diff',
}

export default (text: string, color: COLORS = COLORS.DEFAULT) => `
    \`\`\`${color}
    ${text}
    \`\`\`
`;
