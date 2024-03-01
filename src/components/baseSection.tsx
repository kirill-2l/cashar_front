import { Box, Heading } from "@chakra-ui/react";

export function BaseSection({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <Box as="section" my={10}>
      {title && (
        <Heading as="h2" size="2xl" mb="4">
          {title}
        </Heading>
      )}
      {children}
    </Box>
  );
}
