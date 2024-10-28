"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Card,
  CardHeader,
  Image,
  Button,
  useDisclosure,
} from "@nextui-org/react";

const cards = [
  {
    title: "Card 1",
    description: "Description for Card 1",
  },
  {
    title: "Card 2",
    description: "Description for Card 2",
  },
  {
    title: "Card 3",
    description: "Description for Card 3",
  },
  {
    title: "Card 4",
    description: "Description for Card 4",
  },
];

export default function Industries() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalContent, setModalContent] = useState({
    title: "",
    description: "",
  });

  const handleCardClick = (title, description) => {
    setModalContent({ title, description });
    onOpen();
  };

  return (
    <div className="flex flex-col mt-12 mb-12">
      <p className="text-3xl sm:text-4xl md:text-5xl mb-2">
        Discover The Industries
      </p>
      <p className="text-base sm:text-lg md:text-xl mb-16">
        A world of infinite possibilities starts with a focused vision and a
        business mind.
        <br /> Explore the industries we operate across.
      </p>
      <div className="max-w-full gap-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:px-8">
        {cards.map(({ title, description }, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(title, description)}
            className="transform transition-transform duration-300 hover:scale-105"
          >
            <Card className="h-[300px]">
              <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">
                  {title}
                </p>
                <h4 className="text-white font-medium text-large">
                  {description}
                </h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src="https://nextui.org/images/card-example-4.jpeg"
              />
            </Card>
          </div>
        ))}
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {modalContent.title}
              </ModalHeader>
              <ModalBody>
                <p>{modalContent.description}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
