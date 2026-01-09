import React from 'react';
import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Mail, MapPin, Send, Phone } from 'lucide-react';

interface ContactProps {
  id: string;
}

type FormData = {
  name: string;
  email: string;
  message: string;
};

export const Contact: React.FC<ContactProps> = ({ id }) => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(data);
    toast.success("Message sent successfully!");
    reset();
  };

  return (
    <section id={id} className="py-20 relative">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contato<span className="text-purple-400"></span></h2>
            <p className="text-gray-400">
              Estou sempre aberta para discutir novos projetos, ideias criativas ou oportunidades de fazer parte da sua visão.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-900/20 rounded-lg text-purple-400">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Email:</h4>
                <p className="text-gray-400">rebecafrancog@icloud.com</p>
                <p className="text-gray-400">rebecafrancog@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-900/20 rounded-lg text-purple-400">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Contato/Whatsapp/Telegram: </h4>
                <p className="text-gray-400">(83) 98906-4080</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-900/20 rounded-lg text-purple-400">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Local: </h4>
                <p className="text-gray-400">João Pessoa, PB - Brazil</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
