import { useState } from "react";
import { Button } from "@/components/ui/button"; // Adjust the import path if needed

const LendingPage = () => {
    const [likes, setLikes] = useState(0);

    const handleLike = () => {
        setLikes(likes + 1);
        window.open("https://github.com/Niteshcodes/vite-shadcn-starter", "_blank");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[90vh] bg-secondary p-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
                ⭐ All  Set !
            </h1>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Support The Repository</h1>
            <p className="text-gray-600 mb-4 text-center">
                If you find this repository useful, show some love by starring it on GitHub! ⭐
            </p>
            <Button onClick={handleLike} className="px-6 py-2">
                ⭐ Like & Star on GitHub ({likes})
            </Button>
        </div>
    );
};

export default LendingPage;
