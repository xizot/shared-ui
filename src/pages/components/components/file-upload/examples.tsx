'use client';

import { RHFFileUpload } from '@/components/rhf/rhf-file-upload';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileUpload, type FileUploadFile } from '@/components/ui/file-upload';
import * as React from 'react';
import { useForm } from 'react-hook-form';

export default function FileUploadExamples() {
  const [files, setFiles] = React.useState<File[] | FileUploadFile[]>([]);
  const [multipleFiles, setMultipleFiles] = React.useState<File[] | FileUploadFile[]>([]);
  const [imageFiles, setImageFiles] = React.useState<File[] | FileUploadFile[]>([]);

  const form = useForm({
    defaultValues: {
      documents: [] as File[],
    },
  });

  const onSubmit = (data: { documents: File[] }) => {
    console.log('Form submitted:', data);
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Basic File Upload</CardTitle>
          <CardDescription>Simple single file upload</CardDescription>
        </CardHeader>
        <CardContent>
          <FileUpload value={files} onChange={setFiles} />
          {files.length > 0 && (
            <div className="mt-4 text-sm text-muted-foreground">
              {files.length} file(s) selected
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Multiple Files</CardTitle>
          <CardDescription>Upload multiple files at once</CardDescription>
        </CardHeader>
        <CardContent>
          <FileUpload value={multipleFiles} onChange={setMultipleFiles} multiple />
          {multipleFiles.length > 0 && (
            <div className="mt-4 text-sm text-muted-foreground">
              {multipleFiles.length} file(s) selected
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Image Only</CardTitle>
          <CardDescription>Restrict uploads to image files only</CardDescription>
        </CardHeader>
        <CardContent>
          <FileUpload
            value={imageFiles}
            onChange={setImageFiles}
            accept="image/*"
            multiple
            placeholder="PNG, JPG, GIF up to 5MB"
          />
          {imageFiles.length > 0 && (
            <div className="mt-4 text-sm text-muted-foreground">
              {imageFiles.length} image(s) selected
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Validation</CardTitle>
          <CardDescription>File size and count restrictions</CardDescription>
        </CardHeader>
        <CardContent>
          <FileUpload
            accept=".pdf,.doc,.docx"
            multiple
            maxSize={5 * 1024 * 1024} // 5MB
            maxFiles={3}
            placeholder="PDF, DOC, DOCX (max 5MB, max 3 files)"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Progress</CardTitle>
          <CardDescription>File upload with progress tracking</CardDescription>
        </CardHeader>
        <CardContent>
          <FileUploadWithProgress />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Disabled State</CardTitle>
          <CardDescription>File upload in disabled state</CardDescription>
        </CardHeader>
        <CardContent>
          <FileUpload disabled placeholder="Upload disabled" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With React Hook Form</CardTitle>
          <CardDescription>File upload integrated with react-hook-form</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <RHFFileUpload
              control={form.control}
              name="documents"
              label="Upload Documents"
              multiple
              accept=".pdf,.doc,.docx"
              maxSize={10 * 1024 * 1024} // 10MB
            />
            <Button type="submit">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

function FileUploadWithProgress() {
  const [files, setFiles] = React.useState<FileUploadFile[]>([]);

  React.useEffect(() => {
    if (files.length > 0) {
      // Simulate upload progress
      const interval = setInterval(() => {
        setFiles((prev) =>
          prev.map((file) => {
            if (file.status === 'uploading' && file.progress !== undefined) {
              const newProgress = Math.min(file.progress + 10, 100);
              return {
                ...file,
                progress: newProgress,
                status: newProgress === 100 ? 'success' : 'uploading',
              };
            }
            return file;
          }),
        );
      }, 500);

      return () => clearInterval(interval);
    }
  }, [files]);

  const handleChange = (newFiles: File[] | FileUploadFile[]) => {
    const fileUploadFiles: FileUploadFile[] = newFiles.map((item) => {
      const file = item instanceof File ? item : item.file;
      return {
        file,
        preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : undefined,
        progress: 0,
        status: 'uploading' as const,
      };
    });
    setFiles(fileUploadFiles);
  };

  return (
    <FileUpload
      value={files}
      onChange={handleChange}
      showProgress
      multiple
      placeholder="Files will show upload progress"
    />
  );
}
