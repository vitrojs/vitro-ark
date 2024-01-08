import { FileUpload } from '.'
import { For } from 'vitro'

export const Basic = () => (
  <FileUpload.Root maxFiles={5}>
    <FileUpload.Label>File Upload</FileUpload.Label>
    <FileUpload.Dropzone>Drag your file(s) here</FileUpload.Dropzone>
    <FileUpload.Trigger>Choose file(s)</FileUpload.Trigger>
    <FileUpload.ItemGroup>
      {(files) => (
        <For values={files()}>
          {(file) => (
            <FileUpload.Item file={file}>
              <FileUpload.ItemPreview type='image/*'>
                <FileUpload.ItemPreviewImage />
              </FileUpload.ItemPreview>
              <FileUpload.ItemPreview type='.*'>
                Any Icon
              </FileUpload.ItemPreview>
              <FileUpload.ItemName />
              <FileUpload.ItemSizeText />
              <FileUpload.ItemDeleteTrigger>X</FileUpload.ItemDeleteTrigger>
            </FileUpload.Item>
          )}
        </For>
      )}
    </FileUpload.ItemGroup>
  </FileUpload.Root>
)
