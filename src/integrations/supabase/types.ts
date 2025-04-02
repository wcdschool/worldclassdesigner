export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      notification_settings: {
        Row: {
          email_daily: boolean
          email_realtime: boolean
          email_weekly: boolean
          id: string
          notify_likes: boolean
          notify_views: boolean
          updated_at: string
          user_id: string
        }
        Insert: {
          email_daily?: boolean
          email_realtime?: boolean
          email_weekly?: boolean
          id?: string
          notify_likes?: boolean
          notify_views?: boolean
          updated_at?: string
          user_id: string
        }
        Update: {
          email_daily?: boolean
          email_realtime?: boolean
          email_weekly?: boolean
          id?: string
          notify_likes?: boolean
          notify_views?: boolean
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      notifications: {
        Row: {
          actor_avatar_url: string | null
          actor_id: string | null
          actor_name: string | null
          created_at: string
          id: string
          is_anonymous: boolean | null
          message: string | null
          read: boolean | null
          recipient_id: string
          type: string
        }
        Insert: {
          actor_avatar_url?: string | null
          actor_id?: string | null
          actor_name?: string | null
          created_at?: string
          id?: string
          is_anonymous?: boolean | null
          message?: string | null
          read?: boolean | null
          recipient_id: string
          type: string
        }
        Update: {
          actor_avatar_url?: string | null
          actor_id?: string | null
          actor_name?: string | null
          created_at?: string
          id?: string
          is_anonymous?: boolean | null
          message?: string | null
          read?: boolean | null
          recipient_id?: string
          type?: string
        }
        Relationships: []
      }
      profile_engagement: {
        Row: {
          created_at: string
          id: string
          profile_id: string
          type: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          profile_id: string
          type: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          profile_id?: string
          type?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profile_engagement_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          created_at: string
          education: string | null
          email: string | null
          experience_items: Json | null
          id: string
          instagram_username: string | null
          is_admin: boolean
          languages: string[] | null
          like_count: number | null
          linkedin_username: string | null
          location: string | null
          portfolio_items: Json | null
          portfolio_url: string | null
          profession: string | null
          skills: string[] | null
          updated_at: string
          username: string | null
          username_slug: string | null
          view_count: number | null
          years_experience: number | null
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          education?: string | null
          email?: string | null
          experience_items?: Json | null
          id: string
          instagram_username?: string | null
          is_admin?: boolean
          languages?: string[] | null
          like_count?: number | null
          linkedin_username?: string | null
          location?: string | null
          portfolio_items?: Json | null
          portfolio_url?: string | null
          profession?: string | null
          skills?: string[] | null
          updated_at?: string
          username?: string | null
          username_slug?: string | null
          view_count?: number | null
          years_experience?: number | null
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          education?: string | null
          email?: string | null
          experience_items?: Json | null
          id?: string
          instagram_username?: string | null
          is_admin?: boolean
          languages?: string[] | null
          like_count?: number | null
          linkedin_username?: string | null
          location?: string | null
          portfolio_items?: Json | null
          portfolio_url?: string | null
          profession?: string | null
          skills?: string[] | null
          updated_at?: string
          username?: string | null
          username_slug?: string | null
          view_count?: number | null
          years_experience?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      generate_unique_username_slug: {
        Args: {
          username: string
        }
        Returns: string
      }
      get_filtered_profiles: {
        Args: {
          disciplines?: string[]
          locations?: string[]
          category?: string
          limit_count?: number
          offset_value?: number
        }
        Returns: Record<string, unknown>
      }
      get_policies_for_bucket: {
        Args: {
          bucket_name: string
        }
        Returns: {
          policy_name: string
          action: string
          condition: string
        }[]
      }
      is_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      ping: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
