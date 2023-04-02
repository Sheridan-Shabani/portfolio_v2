import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Icon } from "@iconify/react";

import dynamic from "next/dynamic";

const DynamicLeafletComponent = dynamic(() => import("@/components/Map"), {
  ssr: false,
});

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) =>
    console.log(
      (window.location.href = `mailto:sheridan.shabani@outlook.fr?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`)
    );
  return (
    <div className="pt-44">
      <h4 className={"uppercase text-4xl text-[#F9F871] mb-10"}>Contact</h4>
      <div className="flex flex-row space-x-4">
        <div className="flex flex-col space-y-4">
          <div className={"flex flex-row space-x-3 items-center"}>
            <Icon icon="ph:phone-thin" color="#f9f871" width="20" height="20" />
            <p>+33 7 50 44 09 90</p>
          </div>
          <div className={"flex flex-row space-x-3 items-center"}>
            <Icon
              icon="ph:envelope-thin"
              color="#f9f871"
              width="20"
              height="20"
            />
            <p>sheridan.shabani@outlook.fr</p>
          </div>
          <div className={"flex flex-row space-x-3 items-center"}>
            <Icon
              icon="ph:map-pin-thin"
              color="#f9f871"
              width="20"
              height="20"
            />
            <p>
              11 résidence des oiseaux
              <br />
              62530 - Hersin-Coupigny
              <br />
              France
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={"flex flex-col space-y-2 w-full mx-auto"}
          >
            <div className={"flex flex-col space-y-2"}>
              <input
                {...register("name", { required: true })}
                placeholder={"Name"}
                className={"contactInput"}
                type={"text"}
              />
              <input
                {...register("email", { required: true })}
                placeholder={"Email"}
                className={"contactInput"}
                type={"email"}
              />
            </div>
            <input
              {...register("subject", { required: true })}
              placeholder={"Subject"}
              className={"contactInput"}
              type={"text"}
            />
            <textarea
              {...register("message", { required: true })}
              placeholder={"Message"}
              className={"contactInput"}
            />
            <button
              type={"submit"}
              className={"bg-[#F9F871] py-2 rounded-md text-black font-bold"}
            >
              Submit
            </button>
          </form>
        </div>
        <DynamicLeafletComponent />
      </div>
    </div>
  );
};

export default Contact;
