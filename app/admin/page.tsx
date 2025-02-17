"use client";
import { Stack, TextInput, Divider, Group, Button,Text } from "@mantine/core";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function ProtectedPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  console.log(session,status)
  useEffect(() => {
    setIsClient(true); // Ensures this runs only on the client side
  }, []);
  useEffect(() => {
    if (isClient && status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, isClient, router]);
  if (!isClient) return null; // Prevents rendering issues
  if(status === "loading" || status === "unauthenticated")return <p>Loading...</p>;
  const individualOffers = []
  const coupleOffers = []
  
  return (
    <div className="max-w-2xl mx-auto mt-8 p-8 bg-white rounded-lg shadow-md">
      <Text className="text-2xl font-bold text-center mb-8">Panel Administratora</Text>
      
        <Stack spacing="xl">
          <div>
            <Text className="text-xl font-semibold mb-4">Oferta indywidualna</Text>
            {individualOffers.map((offer, index) => (
              <TextInput
                key={`individual-${index}`}
                value={offer}
                placeholder={`Opcja ${index + 1}`}
                className="mb-4"
                classNames={{
                  input: "w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                  label: "block text-sm font-medium text-gray-700 mb-1"
                }}
              />
            ))}
          </div>

          <Divider my="lg" />

          <div>
            <Text className="text-xl font-semibold mb-4">Oferta dla dwóch osób</Text>
            {coupleOffers.map((offer, index) => (
              <TextInput
                key={`couple-${index}`}
                value={offer}
                placeholder={`Opcja ${index + 1}`}
                className="mb-4"
                classNames={{
                  input: "w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                  label: "block text-sm font-medium text-gray-700 mb-1"
                }}
              />
            ))}
          </div>

          <Group justify="center" mt="xl">
            <Button 
              type="submit"
              className="bg-teal-100 hover:bg-teal-200 text-black px-8 py-3 rounded-md transition-colors duration-200 w-full"
            >
              Zapisz zmiany
            </Button>
          </Group>
        </Stack>
    </div>
  );
};
