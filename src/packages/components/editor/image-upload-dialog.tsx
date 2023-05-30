import {
  Dialog,
  DialogTrigger,
  Button,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  Input,
  DialogFooter,
} from "@/components/atoms";
import { ImageIcon } from "../icons/ImageIcon";

export function ImageUploadDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <ImageIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Upload Image</DialogTitle>
          <DialogDescription>
            Choose whether you want to upload local image or just insert and
            url.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button variant="default">Insert URL</Button>

          <label
            htmlFor="img-upload"
            className="relative h-11 px-4 cursor-pointer flex items-center justify-center gap-2 font-medium active:translate-x-0 active:translate-y-0 active:shadow-none rounded  hover:-translate-x-1 hover:-translate-y-1 transition disabled:pointer-events-none disabled:select-none bg-white border-2 border-accent text-accent-foreground hover:shadow-strong"
          >
            Upload from device
          </label>
          <input type="file" name="img-upload" id="img-upload" hidden />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
