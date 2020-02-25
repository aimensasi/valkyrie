<?php

namespace App\Notifications\Admin;

use App\Models\Inquiry;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class NewInquiryNotification extends Notification{
  use Queueable;

	protected $inquiry;

  /**
   * Create a new notification instance.
   *
   * @return void
   */
  public function __construct(Inquiry $inquiry){
    $this->inquiry = $inquiry;
  }

  /**
   * Get the notification's delivery channels.
   *
   * @param  mixed  $notifiable
   * @return array
   */
  public function via($notifiable){
    return ['database'];
  }

  /**
   * Get the mail representation of the notification.
   *
   * @param  mixed  $notifiable
   * @return \Illuminate\Notifications\Messages\MailMessage
   */
  public function toMail($notifiable){
    return (new MailMessage)
      ->line('The introduction to the notification.')
      ->action('Notification Action', url('/'))
      ->line('Thank you for using our application!');
  }

  /**
   * Get the array representation of the notification.
   *
   * @param  mixed  $notifiable
   * @return array
   */
  public function toArray($notifiable){
    return [
      'id' => $this->inquiry->id,
			'link' => route('admin.inquiries.edit', $this->inquiry->id),
			'message' => "New inquiry was received by {$this->inquiry->name}",
			'received_on' => date_to_human($this->inquiry->created_at),
    ];
  }
}
