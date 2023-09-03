```typescript
import { showModal } from "@/components/Modal";

function clickHandle() {
  const { close, update } = showModal({
    content: "content",
    title: "title",
  });
  // 带图标的Modal
  // const { close, update } = showAvatarModal({
  //   content: "content",
  //   title: "title",
  // });

  setTimeout(() => {
    close();
    setTimeout(() => {
      update({ open: true, title: "t999" });
    }, 3000);
  }, 3000);
}
```

```typescript
import Modal from "@/components/Modal";

const [open, setOpen] = useState(true);
function close() {
  setOpen(false);
}

<Modal onClose={close} open={open} title="title" content="content" />;
// 带图标的Modal
// <AvatarModal onClose={close} open={open} title="title" content="content" />;
```
